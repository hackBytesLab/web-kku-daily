# MERN Starter (MongoDB + Express + React + Node)

โครงสร้างโปรเจกต์แบบ Full‑Stack แยก `frontend` และ `backend` พร้อมตัวอย่างใช้งานจริงแบบ Minimal (ไม่มีฐานข้อมูล/Users) และมีหน้าแผนที่ Google Maps ฝั่ง Frontend ให้แล้ว

## โครงสร้างโฟลเดอร์

```
frontend/      # React (Vite) + Google Maps example
backend/       # Node.js + Express (+ dotenv, cors, morgan, SQLite)
deploy/        # Cloud Build configurations for Google Cloud Run
```

## เริ่มต้นใช้งาน

1) ติดตั้ง dependencies

```bash
cd backend && npm install
cd ../frontend && npm install
```

2) ตั้งค่า Environment Variables

ฝั่ง Backend — คัดลอกไฟล์ตัวอย่างและแก้ค่าตามเครื่องของคุณ

```bash
cd backend
cp .env.example .env   # Windows ใช้ copy แทนได้: copy .env.example .env
```

ค่าเริ่มต้นใน `.env`

```
PORT=5000
CLIENT_ORIGIN=http://localhost:5173
DB_PATH=./data/app.sqlite
```

ฝั่ง Frontend — ใส่ Google Maps API Key

สร้างไฟล์ `frontend/.env` (หรือแก้ไฟล์เดิม) ด้วยค่า:

```
VITE_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_JS_API_KEY
```

หมายเหตุ: คีย์นี้ถูก `.gitignore` แล้ว ไม่ถูก commit; ถ้าเพิ่งแก้ `.env` ให้รีสตาร์ท `npm run dev` ฝั่ง frontend

3) รันโหมดพัฒนา (เปิด 2 หน้าต่าง/สองแท็บเทอร์มินัล)

Backend

```bash
cd backend
npm run dev
```

Frontend

```bash
cd frontend
npm run dev
```

จากนั้นเปิดเบราว์เซอร์ไปที่ `http://localhost:5173` และ API จะอยู่ที่ `http://localhost:5000`

## จุดเริ่มต้นของโค้ด

- Backend: `backend/src/server.js` — ตั้งค่า Express, CORS, morgan, และมี API ตัวอย่าง `GET /api/health` (คืน `{ status: 'ok' }`)
- Markers API: `backend/src/routes/markers.js` + `backend/src/repos/markersRepo.js` — จัดเก็บหมุดลง SQLite และส่งข้อมูลแบบ realtime ผ่าน SSE (`GET /api/markers/stream`)
- Frontend: `frontend/src/App.jsx` — ตัวอย่างหน้า React ที่เรียก API health และแสดง Google Map (ศูนย์กลางที่กรุงเทพ พร้อมหมุด)
- บริการฝั่ง Frontend: `frontend/src/services/markersApi.js` — จัดการเชื่อมต่อ backend (POST/PATCH/DELETE) และ subscribe ข้อมูลหมุดแบบ realtime; ในโหมดออกแบบ (`VITE_DESIGN_MODE=1`) จะสลับไปใช้ `markersLocal.js`

ไฟล์ที่เกี่ยวข้องกับ Google Maps
- Loader สคริปต์: `frontend/src/lib/loadGoogleMaps.js`
- คีย์ที่ใช้ใน dev: `frontend/.env` (`VITE_GOOGLE_MAPS_API_KEY`)

## หมายเหตุ

- Proxy ของ Vite ถูกตั้งค่าไว้แล้วใน `frontend/vite.config.js` ให้เส้นทาง `/api/*` ยิงไป `http://localhost:5000`
- หากใช้ dev server ของ Vite ให้เปิด backend (`cd backend && npm run dev`) ก่อน frontend ทุกครั้ง ไม่เช่นนั้นคำสั่ง `/api/markers/stream` จะ error และหมุดจะไม่ซิงก์
- ต้องการข้าม proxy สามารถตั้ง `VITE_API_BASE_URL=http://localhost:5000/api` ใน `frontend/.env` แล้วรีสตาร์ท `npm run dev`
- หากคุณใช้พอร์ตอื่น ให้แก้ `CLIENT_ORIGIN` ใน `backend/.env` และ `target` ใน `frontend/vite.config.js`
- โปรเจกต์นี้เป็น Minimal — ยังไม่มีฐานข้อมูลและเส้นทาง `/api/users`

## ตัวเลือกเพิ่มเติม (Windows)

- ใช้ `run-dev.bat` หรือ `start-web.bat` เพื่อเปิด Backend + Frontend อัตโนมัติในหน้าต่างแยก (ต้องรันผ่าน PowerShell/Command Prompt ไม่ใช่ WSL)

## Deploy ไป Google Cloud

### Backend → Cloud Run

1. ตรวจสอบหรือแก้ไฟล์ `backend/Dockerfile` และ `backend/.dockerignore` ให้เรียบร้อย (พร้อมใช้ Node 20 Slim และพอร์ต 8080 ตามข้อกำหนด Cloud Run)
2. สร้าง Artifact Registry repository (ตัวอย่าง `gcloud artifacts repositories create mern --repository-format=docker --location=asia-southeast1`)
3. Deploy ด้วย Cloud Build ได้ทันที

   ```bash
   gcloud builds submit \
     --config deploy/cloudbuild.backend.yaml \
     --substitutions _SERVICE_NAME=mern-backend,_REGION=asia-southeast1,_BACKEND_IMAGE=asia-southeast1-docker.pkg.dev/PROJECT_ID/mern/backend,_CLIENT_ORIGIN=https://your-frontend.example.com,_DB_PATH=/tmp/app.sqlite
   ```

   - `_CLIENT_ORIGIN` กำหนดเป็นโดเมน frontend ของจริง
   - `_DB_PATH` ดีฟอลต์ `/tmp/app.sqlite` (เก็บชั่วคราวระหว่างรันบน Cloud Run); ถ้าต้องการ persistence ให้ย้ายไป Cloud SQL/Firestore แล้วปรับ ENV ตามนั้น
4. หรือถ้าอยาก deploy ด้วยตัวเอง: `docker build -t IMAGE_TAG backend` → `docker push` → `gcloud run deploy ... --image IMAGE_TAG --set-env-vars CLIENT_ORIGIN=...,DB_PATH=...`

### Frontend → Cloud Run หรือ Static Hosting

1. ใช้ `frontend/Dockerfile` (multi-stage build + Nginx) และไฟล์ `frontend/.dockerignore`
2. ระหว่าง build ต้องใส่ค่า `VITE_GOOGLE_MAPS_API_KEY` ผ่าน build arg/substitution (`_MAPS_KEY`)

   ```bash
   gcloud builds submit \
     --config deploy/cloudbuild.frontend.yaml \
     --substitutions _SERVICE_NAME=mern-frontend,_REGION=asia-southeast1,_FRONTEND_IMAGE=asia-southeast1-docker.pkg.dev/PROJECT_ID/mern/frontend,_MAPS_KEY=YOUR_MAPS_API_KEY
   ```

3. คำสั่งด้านบนจะสร้าง/อัปโหลด container แล้ว `gcloud run deploy` ให้เลย (เปิดพอร์ต 8080)
4. หากอยากใช้ static hosting (Cloud Storage + Cloud CDN หรือ Firebase Hosting) ยังทำได้: `npm --prefix frontend run build` แล้วอัปโหลด `frontend/dist` ตามบริการที่เลือก

### สิ่งที่ต้องเตรียมเพิ่ม

- ตั้งค่า Secret / ENV บน Cloud Run ให้ตรงกับ production (เช่น `CLIENT_ORIGIN`, คีย์ฐานข้อมูล, Google Maps Key หากต้องการ build ใหม่)
- เปิด IAM/นโยบายสิทธิ์ให้ Cloud Build สามารถ deploy Cloud Run และ push ภาพขึ้น Artifact Registry ได้ (`roles/run.admin`, `roles/artifactregistry.writer` เป็นต้น)
- พิจารณาย้ายฐานข้อมูลไปบริการที่เหมาะกับ production (Cloud SQL, Firestore, หรืออื่นๆ) แล้วอัปเดตโค้ด backend ให้เชื่อมต่อ

## Troubleshooting

- หน้าเว็บขึ้น `API health: ...` ค้าง/เป็น `error`:
  - เช็กว่า Backend รันอยู่ (`cd backend && npm run dev`) และพอร์ต 5000 ไม่ชน
  - ตรวจค่า `CLIENT_ORIGIN` ให้ตรงกับที่ Frontend ใช้งาน (ดีฟอลต์ `http://localhost:5173`)
- แผนที่ไม่แสดง/เตือน `Missing VITE_GOOGLE_MAPS_API_KEY`:
  - ใส่คีย์ใน `frontend/.env` แล้วรีสตาร์ท `npm run dev` ฝั่ง Frontend
  - เปิดใช้งาน “Maps JavaScript API” และเปิด Billing ใน Google Cloud
  - ถ้าจำกัด Referrer ให้อนุญาต `http://localhost:5173`

- บันทึกหมุดช้า/พลาดเมื่อคลิกถี่ๆ:
  - ตอนนี้ backend ใช้ SQLite แล้ว (ไฟล์ `data/app.sqlite`) รองรับพร้อมกันดีกว่าเก็บไฟล์ JSON
  - ถ้าพบปัญหา ให้ดู log ฝั่ง Backend ว่ามี error อะไรระหว่าง `POST /api/markers`
