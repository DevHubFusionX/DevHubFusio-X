import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplicationModal = ({ isOpen, onClose }: ApplicationModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          ...formData,
          subject: `🚀 New Application: ${formData.name}`,
          from_name: "Antigravity AI Portal",
          replyto: formData.email,
          template_id: "table-green",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        // Optional: Reset form after delay or keep success state
        setTimeout(() => {
           // onClose(); 
           // setStatus('idle');
           // setFormData({ name: '', email: '', description: '' });
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      
      {/* Success State */}
      {status === 'success' ? (
        <div className="text-center py-12 px-4 rounded-3xl bg-gradient-to-b from-primary/5 to-transparent border border-primary/10">
           <motion.div 
             initial={{ scale: 0, rotate: -45 }}
             animate={{ scale: 1, rotate: 0 }}
             transition={{ type: "spring", damping: 12, stiffness: 200 }}
             className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8 relative"
           >
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-20" />
              <CheckCircle2 size={48} />
           </motion.div>
           <h3 className="text-4xl font-black uppercase tracking-tighter mb-4 text-foreground">
             Transmission Received
           </h3>
           <p className="text-muted-foreground mb-10 text-lg leading-relaxed max-w-sm mx-auto">
             Your profile has been logged into our system. <br/>
             If we match, you'll hear from me within <span className="text-primary font-bold">48 hours</span>.
           </p>
           <Button onClick={onClose} variant="outline" className="rounded-full px-10 h-14 border-primary/20 hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all font-bold uppercase tracking-widest text-xs">
             Dismiss Protocol
           </Button>
        </div>
      ) : (
        /* Form State */
        <>
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold uppercase tracking-tighter mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Apply for Access
            </h3>
            <div className="h-1 w-12 bg-primary mx-auto mb-4 rounded-full" />
            <p className="text-muted-foreground text-base max-w-[280px] mx-auto leading-relaxed">
              Strictly limited capacity. <br/> Tell me what you're building.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY} /> 
            <input type="hidden" name="from_name" value="Antigravity AI Portal" />
            <input type="hidden" name="subject" value={`🚀 New Application: ${formData.name}`} />
            <input type="hidden" name="template_id" value="table-green" />

            {status === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3 text-red-500 text-sm font-bold">
                 <AlertCircle size={16} />
                 <span>Transmission failed. Please try again.</span>
              </div>
            )}

            <div className="group space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-muted-foreground group-focus-within:text-primary transition-colors ml-1">Name</label>
              <input 
                required
                type="text" 
                className="w-full px-5 py-4 rounded-2xl bg-muted/50 border-2 border-transparent focus:bg-background focus:border-primary/50 focus:ring-8 focus:ring-primary/5 transition-all outline-none text-foreground font-medium placeholder:text-muted-foreground/30"
                placeholder="Founder Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={status === 'submitting'}
              />
            </div>

            <div className="group space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-muted-foreground group-focus-within:text-primary transition-colors ml-1">Email</label>
              <input 
                required
                type="email" 
                className="w-full px-5 py-4 rounded-2xl bg-muted/50 border-2 border-transparent focus:bg-background focus:border-primary/50 focus:ring-8 focus:ring-primary/5 transition-all outline-none text-foreground font-medium placeholder:text-muted-foreground/30"
                placeholder="work@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={status === 'submitting'}
              />
            </div>

            <div className="group space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-muted-foreground group-focus-within:text-primary transition-colors ml-1">The Challenge</label>
              <textarea 
                required
                rows={4}
                className="w-full px-5 py-4 rounded-2xl bg-muted/50 border-2 border-transparent focus:bg-background focus:border-primary/50 focus:ring-8 focus:ring-primary/5 transition-all outline-none resize-none text-foreground font-medium placeholder:text-muted-foreground/30"
                placeholder="Briefly describe your project or problem..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                disabled={status === 'submitting'}
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full rounded-2xl text-lg group h-14 bg-primary hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
              isLoading={status === 'submitting'}
            >
              Send Application
              {!status && <Send size={18} className="ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />}
            </Button>
          </form>
        </>
      )}
    </Modal>
  );
};
