import { AppCard } from "@/components/AppCard";
import { StatsCard } from "@/components/StatsCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Sparkles, Users, Zap, TrendingUp } from "lucide-react";

const Index = () => {
  const apps = [
    {
      name: "Dashboard Pro",
      description: "Advanced analytics dashboard for business intelligence and data visualization",
      status: "active" as const,
      users: 12453,
      lastUpdated: "2 hours ago",
      icon: "📊"
    },
    {
      name: "E-Commerce Hub",
      description: "Complete e-commerce solution with inventory management and payment processing",
      status: "active" as const,
      users: 8291,
      lastUpdated: "5 hours ago",
      icon: "🛒"
    },
    {
      name: "Social Connect",
      description: "Social networking platform with real-time messaging and community features",
      status: "maintenance" as const,
      users: 24567,
      lastUpdated: "1 day ago",
      icon: "💬"
    },
    {
      name: "Task Master",
      description: "Project management tool with team collaboration and workflow automation",
      status: "active" as const,
      users: 5432,
      lastUpdated: "3 hours ago",
      icon: "✓"
    },
    {
      name: "AI Assistant",
      description: "Intelligent AI-powered assistant for productivity and automation tasks",
      status: "active" as const,
      users: 15678,
      lastUpdated: "1 hour ago",
      icon: "🤖"
    },
    {
      name: "Portfolio Site",
      description: "Professional portfolio website builder with customizable templates",
      status: "inactive" as const,
      users: 892,
      lastUpdated: "1 week ago",
      icon: "🎨"
    }
  ];

  const stats = [
    { title: "Total Apps", value: "24", change: "+12%", icon: Zap, trend: "up" as const },
    { title: "Active Users", value: "67.2K", change: "+23%", icon: Users, trend: "up" as const },
    { title: "Success Rate", value: "98.5%", change: "+2.1%", icon: TrendingUp, trend: "up" as const },
    { title: "Performance", value: "99.9%", change: "+0.5%", icon: Sparkles, trend: "up" as const }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Master Your Applications</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent animate-fade-in">
              Control Center for
              <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                All Your Apps
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              Manage, monitor, and optimize your entire application ecosystem from one powerful dashboard
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 text-primary-foreground shadow-[var(--shadow-glow)]">
                <Plus className="w-5 h-5 mr-2" />
                Create New App
              </Button>
              <Button size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground hover:border-primary">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>
      </section>

      {/* Apps Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Your Applications</h2>
            <p className="text-muted-foreground">Manage and monitor all your apps in one place</p>
          </div>
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search apps..."
              className="pl-10 w-full sm:w-64 bg-card border-border"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <AppCard key={index} {...app} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
