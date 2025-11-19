import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: "up" | "down";
}

export const StatsCard = ({ title, value, change, icon: Icon, trend }: StatsCardProps) => {
  return (
    <Card className="p-6 border border-border bg-card hover:shadow-[var(--shadow-card)] transition-all duration-300 animate-slide-in">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-card-foreground">{value}</h3>
          <p className={`text-sm mt-2 ${trend === "up" ? "text-green-600" : "text-red-600"}`}>
            {change} from last month
          </p>
        </div>
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
    </Card>
  );
};
