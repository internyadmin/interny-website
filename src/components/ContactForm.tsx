// src/components/ContactForm.tsx

import { useState } from 'react';
// Bu import'ların sizin "ui" klasörünüzden geldiğini varsayıyorum.
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

// GÜNCELLENMİŞ INTERFACE: actionUrl prop'u eklendi
interface ContactFormProps {
  fields: Array<{
    name: string;
    label: string;
    type: 'text' | 'email' | 'textarea';
    placeholder?: string;
  }>;
  title?: string;
  description?: string;
  // 👈 YENİ VE KRİTİK PROP
  actionUrl: string;{"https://formspree.io/f/xqagazky"}
}

// actionUrl prop'u destructure edilerek alındı
export function ContactForm({ fields, title, description, actionUrl }: ContactFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);

    try {
      // 👈 GÜNCELLEME: Sabit URL yerine actionUrl prop'u kullanılıyor
      const response = await fetch(actionUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form sent:", formData);
        setSubmitted(true);
        // Form gönderildikten sonra inputları temizle
        setFormData({});
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Form error:", err);
      setError(true);
    }
  };

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      {title && <h3 className="text-gray-900 mb-4">{title}</h3>}
      {description && <p className="text-gray-600 mb-8">{description}</p>}

      {submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <p className="text-green-800">✅ Thank you! We'll get back to you soon.</p>
        </div>
      ) : error ? (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <p className="text-red-800">❌ Something went wrong. Please try again.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {fields.map((field) => (
            <div key={field.name}>
              <Label htmlFor={field.name}>{field.label}</Label>
              {field.type === 'textarea' ? (
                <Textarea
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name] || ''}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  required
                  rows={5}
                  className="mt-2"
                />
              ) : (
                <Input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.name] || ''}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  required
                  className="mt-2"
                />
              )}
            </div>
          ))}

          <Button
            type="submit"
            className="w-full text-white"
            style={{ backgroundColor: '#ff6100' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e55700')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ff6100')}
          >
            Submit
          </Button>
        </form>
      )}
    </div>
  );
}