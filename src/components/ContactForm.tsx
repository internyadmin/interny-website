import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

interface ContactFormProps {
  fields: Array<{
    name: string;
    label: string;
    type: 'text' | 'email' | 'textarea';
    placeholder?: string;
  }>;
  title?: string;
  description?: string;
}

export function ContactForm({ fields, title, description }: ContactFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({});
    }, 3000);
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
          <p className="text-green-800">Thank you! We'll get back to you soon.</p>
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
          
          <Button type="submit" className="w-full text-white" style={{ backgroundColor: '#ff6100' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e55700'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff6100'}>
            Submit
          </Button>
        </form>
      )}
    </div>
  );
}
