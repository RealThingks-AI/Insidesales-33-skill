import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, BarChart3, Settings } from "lucide-react";

interface AppCardProps {
  name: string;
  description: string;
  status: "active" | "inactive" | "maintenance";
  users: number;
  lastUpdated: string;
  icon: string;
}

export const AppCard = ({ name, description, status, users, lastUpdated, icon }: AppCardProps) => {
  const statusColors = {
    active: "bg-green-500/10 text-green-600 border-green-500/20",
    inactive: "bg-muted text-muted-foreground border-border",
    maintenance: "bg-amber-500/10 text-amber-600 border-amber-500/20"
  };

  return (
    <Card className="group relative overflow-hidden border border-border bg-card hover:shadow-[var(--shadow-glow)] transition-all duration-300 animate-fade-in">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white text-2xl font-bold shadow-[var(--shadow-glow)]">
              {icon}
            </div>
            <div>
              <h3 className="font-semibold text-lg text-card-foreground">{name}</h3>
              <Badge className={`${statusColors[status]} text-xs mt-1`}>
                {status}
              </Badge>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
            <Settings className="w-4 h-4" />
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <div>
              <span className="text-muted-foreground">Users: </span>
              <span className="font-semibold text-foreground">{users.toLocaleString()}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Updated: </span>
              <span className="font-semibold text-foreground">{lastUpdated}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-4 pt-4 border-t border-border">
          <Button variant="outline" size="sm" className="flex-1 hover:bg-primary hover:text-primary-foreground hover:border-primary">
            <BarChart3 className="w-4 h-4 mr-2" />
            Analytics
          </Button>
          <Button variant="outline" size="sm" className="flex-1 hover:bg-primary hover:text-primary-foreground hover:border-primary">
            <ExternalLink className="w-4 h-4 mr-2" />
            Open
          </Button>
        </div>
      </div>
    </Card>
  );
};
