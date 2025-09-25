
import React, { useEffect, useState } from 'react';
import './Modal.css';


// เพิ่ม prop onDelete สำหรับลบ marker
export default function Modal({ open, title, submitText = 'Save', initial = {}, allowImage = false, onSubmit, onCancel, onDelete }) {
  const [form, setForm] = useState({ title: '', description: '', file: null, preview: null, existing: null });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (open) {
      setForm((curr) => {
        if (curr.preview) URL.revokeObjectURL(curr.preview);
        return {
          title: initial.title || '',
          description: initial.description || '',
          file: null,
          preview: null,
          existing: initial.photoURL || null,
        };
      });
      // Trigger mount animation
      setTimeout(() => setMounted(true), 50);
    } else {
      setMounted(false);
    }
  }, [open, initial.title, initial.description, initial.photoURL]);

  useEffect(() => () => {
    if (form.preview) URL.revokeObjectURL(form.preview);
  }, [form.preview]);

  if (!open) return null;

  const fileLabel = form.file ? form.file.name : 'Choose a file...';
  const previewSrc = form.preview || form.existing || null;

  return (
    <div className={`modal-overlay ${mounted ? 'modal-overlay-visible' : ''}`} role="dialog" aria-modal="true" onClick={onCancel}>
      <div className={`modal-content ${mounted ? 'modal-content-visible' : ''}`} onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">{title}</div>
          <button className="modal-close" onClick={onCancel}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label className="form-label">Title</label>
            <input
              className="form-input"
              placeholder="Enter title..."
              value={form.title}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea
              className="form-input"
              rows={3}
              placeholder="Enter description..."
              value={form.description}
              onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
            />
          </div>
          {allowImage && (
            <div className="form-group">
              <label className="form-label">Photo (optional)</label>
              <div className="file-input-wrapper">
                <input
                  type="file"
                  accept="image/*"
                  className="file-input"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    setForm((f) => {
                      if (f.preview) URL.revokeObjectURL(f.preview);
                      if (!file) return { ...f, file: null, preview: null };
                      const url = URL.createObjectURL(file);
                      return { ...f, file, preview: url, existing: null };
                    });
                  }}
                />
                <span className="file-input-text">{fileLabel}</span>
              </div>
              {previewSrc && (
                <div className="preview-container">
                  <img src={previewSrc} alt="preview" className="preview-image" />
                  <div className="preview-badge">{form.preview ? 'New upload' : 'Current photo'}</div>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="modal-footer">
          {/* ปุ่ม Delete จะโชว์เมื่อมี onDelete และ initial.id (หรือ initial มีข้อมูล) */}
          {onDelete && initial && initial.id && (
            <button
              className="modal-btn modal-btn-danger"
              onClick={e => {
                e.stopPropagation(); // ป้องกัน overlay ปิด modal
                if (window.confirm('Delete this marker?')) {
                  console.log('Delete marker:', initial);
                  onDelete(initial);
                }
              }}
            >
              Delete
            </button>
          )}
          <button className="modal-btn modal-btn-secondary" onClick={onCancel}>Cancel</button>
          <button className="modal-btn modal-btn-primary" onClick={() => onSubmit({ ...form })}>{submitText}</button>
        </div>
      </div>
    </div>
  );
}
