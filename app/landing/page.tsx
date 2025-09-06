import { WaitlistForm } from "@/app/components/waitlist-form";
import { FeatureCard } from "@/app/components/feature-card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Bird,
  Bell,
  Zap,
  Users,
  Target,
  Workflow,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bird className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold text-foreground">
                BillBird
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-secondary hover:text-foreground transition-colors"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-secondary hover:text-foreground transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-secondary hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance animate-fade-in">
              Track Your Bills Like a{" "}
              <span className="text-accent">Smart Bird</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary text-pretty animate-fade-in animation-delay-200">
              Get workflow-based tool recommendations tailored for developers.
              Stop losing track of your subscriptions and discover tools that
              actually fit your workflow - all with the intelligence of a bird.
            </p>
            <div className="mt-10 animate-fade-in animation-delay-400">
              <WaitlistForm />
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-accent to-accent/30 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 sm:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Built for Developer Workflows
            </h2>
            <p className="mt-4 text-lg text-secondary text-pretty">
              Not just another spreadsheet. Get intelligent recommendations with
              the precision of a bird of prey.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Workflow className="h-8 w-8 text-accent" />}
                title="Workflow-Aware"
                description="Select your workflow (UI/UX, Backend, Indie Hacker) and get curated tool recommendations that actually matter."
              />
              <FeatureCard
                icon={<Bell className="h-8 w-8 text-accent" />}
                title="Smart Alerts"
                description="Never miss a renewal again. Get timely notifications via email or Slack before your subscriptions renew."
              />
              <FeatureCard
                icon={<Bird className="h-8 w-8 text-accent" />}
                title="Bird's Eye View"
                description="See your total monthly spend, track trends, and identify subscriptions you might have forgotten about."
              />
              <FeatureCard
                icon={<Target className="h-8 w-8 text-accent" />}
                title="Curated Recommendations"
                description="Discover new tools that fit your workflow. No more endless research - we've done the work for you."
              />
              <FeatureCard
                icon={<Zap className="h-8 w-8 text-accent" />}
                title="Quick Setup"
                description="Manual entry to start, with plans for automatic detection. Get value immediately without complex integrations."
              />
              <FeatureCard
                icon={<Users className="h-8 w-8 text-accent" />}
                title="Developer-First"
                description="Built by developers, for developers. We understand your tools and workflows because we use them too."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Creation Section */}
      <section id="features" className="py-20 sm:py-32 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Create Your Workflows and Track Expenses
            </h2>
            <p className="mt-4 text-lg text-secondary text-pretty">
              Build custom workflows and get tool recommendations tailored to
              your exact process.
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* UI/UX Block */}
              <div className="bg-card rounded-xl p-6 border border-border hover:border-accent/50 transition-colors group">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  UI/UX Designer
                </h3>
                <p className="text-sm text-secondary mb-4">
                  Design-focused tools and creative workflows
                </p>
                <div className="space-y-2">
                  <div className="text-xs text-accent font-medium">
                    Recommended:
                  </div>
                  <div className="text-xs text-secondary">
                    Figma, Adobe Creative Suite, Sketch
                  </div>
                </div>
              </div>

              {/* Backend Block */}
              <div className="bg-card rounded-xl p-6 border border-border hover:border-accent/50 transition-colors group">
                <div className="w-12 h-12 bg-chart-2/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-chart-2/30 transition-colors">
                  <Workflow className="h-6 w-6 text-chart-2" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Backend Developer
                </h3>
                <p className="text-sm text-secondary mb-4">
                  Server-side and infrastructure tools
                </p>
                <div className="space-y-2">
                  <div className="text-xs text-chart-2 font-medium">
                    Recommended:
                  </div>
                  <div className="text-xs text-secondary">
                    AWS, Docker, MongoDB Atlas
                  </div>
                </div>
              </div>

              {/* Indie Hacker Block */}
              <div className="bg-card rounded-xl p-6 border border-border hover:border-accent/50 transition-colors group">
                <div className="w-12 h-12 bg-chart-3/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-chart-3/30 transition-colors">
                  <Zap className="h-6 w-6 text-chart-3" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Indie Hacker
                </h3>
                <p className="text-sm text-secondary mb-4">
                  Solo entrepreneur and startup tools
                </p>
                <div className="space-y-2">
                  <div className="text-xs text-chart-3 font-medium">
                    Recommended:
                  </div>
                  <div className="text-xs text-secondary">
                    Vercel, Stripe, PostHog
                  </div>
                </div>
              </div>

              {/* Full-Stack Block */}
              <div className="bg-card rounded-xl p-6 border border-border hover:border-accent/50 transition-colors group">
                <div className="w-12 h-12 bg-chart-4/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-chart-4/30 transition-colors">
                  <Users className="h-6 w-6 text-chart-4" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Full-Stack
                </h3>
                <p className="text-sm text-secondary mb-4">
                  End-to-end development workflows
                </p>
                <div className="space-y-2">
                  <div className="text-xs text-chart-4 font-medium">
                    Recommended:
                  </div>
                  <div className="text-xs text-secondary">
                    Cursor, Supabase, Claude
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Why Workflow-Aware Matters
                </h3>
                <p className="text-secondary">
                  Get recommendations that actually fit your development style
                  and needs
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Bell className="h-5 w-5 text-accent" />
                  </div>
                  <h4 className="font-medium text-foreground mb-2">
                    Smart Filtering
                  </h4>
                  <p className="text-sm text-secondary">
                    Only see tools relevant to your workflow type
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Bird className="h-5 w-5 text-accent" />
                  </div>
                  <h4 className="font-medium text-foreground mb-2">
                    Cost Optimization
                  </h4>
                  <p className="text-sm text-secondary">
                    Identify overlapping tools and save money
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Target className="h-5 w-5 text-accent" />
                  </div>
                  <h4 className="font-medium text-foreground mb-2">
                    Curated Discovery
                  </h4>
                  <p className="text-sm text-secondary">
                    Find new tools that complement your stack
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Ready to soar above your subscription chaos?
            </h2>
            <p className="mt-4 text-lg text-secondary text-pretty">
              Join the waitlist and be among the first to experience
              workflow-aware subscription tracking with BillBird.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Bird className="h-6 w-6 text-accent" />
              <span className="text-lg font-semibold text-foreground">
                BillBird
              </span>
            </div>
            <div className="flex space-x-6 text-sm text-secondary">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-secondary">
            © 2024 BillBird. Built for developers who value their time.
          </div>
        </div>
      </footer>
    </div>
  );
}
