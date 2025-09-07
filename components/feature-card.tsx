import type React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card">
      <CardContent className="p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-card-foreground mb-2">
          {title}
        </h3>
        <p className="text-sm text-secondary leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
