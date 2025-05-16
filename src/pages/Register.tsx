
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from 'sonner';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptTerms) {
      toast.error('You must accept the terms and conditions to register');
      return;
    }
    
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    
    // Handle registration logic here
    toast.success('Registration successful!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md px-8 py-10 rounded-2xl bg-quiz-blue text-white">
        <h1 className="text-3xl font-bold text-center mb-8">REGISTER</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block">Email</label>
            <Input
              id="email"
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
              className="bg-white text-black w-full h-10 px-3 py-2 rounded-md"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="block">Password</label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
              className="bg-white text-black w-full h-10 px-3 py-2 rounded-md"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="block">Confirm Password</label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              required
              className="bg-white text-black w-full h-10 px-3 py-2 rounded-md"
            />
          </div>
          
          <div className="flex items-center space-x-2 pt-2">
            <Checkbox 
              id="terms" 
              checked={acceptTerms} 
              onCheckedChange={(checked) => {
                setAcceptTerms(checked === true);
              }}
            />
            <label 
              htmlFor="terms" 
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the {' '}
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <span className="underline cursor-pointer">terms and conditions</span>
                </DialogTrigger>
                <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold">Terms and Conditions</DialogTitle>
                  </DialogHeader>
                  <div className="py-4 space-y-4">
                    <h3 className="font-semibold">1. Introduction</h3>
                    <p>Welcome to our services. By registering, you agree to these terms which will be binding on you.</p>
                    
                    <h3 className="font-semibold">2. Privacy Policy</h3>
                    <p>Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information.</p>
                    
                    <h3 className="font-semibold">3. User Accounts</h3>
                    <p>You are responsible for maintaining the confidentiality of your account information and password.</p>
                    
                    <h3 className="font-semibold">4. Acceptable Use</h3>
                    <p>You agree not to use our services for any illegal or unauthorized purpose nor violate any laws in your jurisdiction.</p>
                    
                    <h3 className="font-semibold">5. Intellectual Property Rights</h3>
                    <p>Our content is protected by copyright, trademark, and other intellectual property laws.</p>
                    
                    <h3 className="font-semibold">6. Termination</h3>
                    <p>We may terminate or suspend your account and access to our services if you violate these Terms or for any other reason.</p>
                    
                    <h3 className="font-semibold">7. Changes to Terms</h3>
                    <p>We may modify these terms at any time. Your continued use of our services constitutes your acceptance of the revised terms.</p>
                  </div>
                </DialogContent>
              </Dialog>
            </label>
          </div>
          
          <Button 
            type="submit" 
            disabled={!acceptTerms}
            className={`w-full py-2 mt-6 ${!acceptTerms ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
            variant="outline"
          >
            Register
          </Button>
        </form>
        
        <div className="mt-4 text-center">
          <p className="text-white">
            Already have an account?{' '}
            <Link to="/" className="text-white underline hover:text-blue-100">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
