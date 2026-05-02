import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plane } from "lucide-react";
import { login } from "@/lib/auth";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  const nav = useNavigate();
  const [phone, setPhone] = useState("");
  const [pwd, setPwd] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    nav({ to: "/dashboard" });
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-primary to-sky text-primary-foreground relative overflow-hidden">
        <div className="flex items-center gap-3 z-10">
          <div className="h-10 w-10 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center">
            <Plane className="h-5 w-5" />
          </div>
          <span className="font-display text-xl font-bold">ChatB Flight Alert</span>
        </div>
        <div className="z-10 max-w-md">
          <h1 className="font-display text-5xl font-bold leading-tight">Live flight pulse, pushed at the right second.</h1>
          <p className="mt-4 text-white/85 text-lg">Smart scheduling. Hard limits. Zero wasted API calls.</p>
        </div>
        <div className="text-xs text-white/70 z-10">© ChatB · Real-time aviation events</div>
        <Plane className="absolute -right-12 -bottom-8 h-[420px] w-[420px] text-white/10" />
      </div>

      <div className="flex items-center justify-center p-6">
        <form onSubmit={onSubmit} className="w-full max-w-sm space-y-6">
          <div className="lg:hidden flex items-center gap-2 mb-2">
            <Plane className="h-5 w-5 text-primary" />
            <span className="font-display font-bold">ChatB Flight Alert</span>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold">Sign in</h2>
            <p className="text-sm text-muted-foreground mt-1">Enter your phone and password to continue.</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone number</Label>
            <Input id="phone" placeholder="+91 9XXXXXXXXX" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="pwd">Password</Label>
            <Input id="pwd" type="password" placeholder="••••••••" value={pwd} onChange={(e) => setPwd(e.target.value)} />
          </div>
          <Button type="submit" className="w-full">Sign in</Button>
          <p className="text-xs text-muted-foreground text-center">Demo login — any value works.</p>
        </form>
      </div>
    </div>
  );
}
