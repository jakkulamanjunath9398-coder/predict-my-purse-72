import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Target, 
  AlertTriangle,
  PieChart,
  Plus,
  ArrowRight
} from "lucide-react";

const Dashboard = () => {
  const mockExpenses = [
    { category: "Food & Dining", amount: 342, change: -12, color: "bg-gradient-primary" },
    { category: "Transportation", amount: 185, change: 8, color: "bg-gradient-success" },
    { category: "Entertainment", amount: 127, change: -5, color: "bg-primary/10" },
    { category: "Shopping", amount: 89, change: 15, color: "bg-warning/10" },
  ];

  const mockGoals = [
    { name: "Emergency Fund", current: 1250, target: 2000, progress: 62.5 },
    { name: "Spring Break Trip", current: 680, target: 1200, progress: 56.7 },
    { name: "New Laptop", current: 450, target: 800, progress: 56.3 },
  ];

  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Finance Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            AI-powered insights for your financial journey
          </p>
        </div>
        <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-smooth">
          <Plus className="w-4 h-4 mr-2" />
          Add Expense
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow-card bg-gradient-card border-0 hover:shadow-elevated transition-smooth">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">$2,847.50</div>
            <p className="text-xs text-success flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +12.5% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-gradient-card border-0 hover:shadow-elevated transition-smooth">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Spending</CardTitle>
            <TrendingDown className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$743.00</div>
            <p className="text-xs text-warning flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +8.2% from budget
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-gradient-card border-0 hover:shadow-elevated transition-smooth">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Savings Goals</CardTitle>
            <Target className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">3/5</div>
            <p className="text-xs text-muted-foreground mt-1">
              Goals on track this month
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-gradient-card border-0 hover:shadow-elevated transition-smooth">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Budget Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">2</div>
            <p className="text-xs text-muted-foreground mt-1">
              Categories need attention
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Expense Categories */}
        <Card className="lg:col-span-2 shadow-card bg-gradient-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center">
              <PieChart className="w-5 h-5 mr-2 text-primary" />
              Expense Categories
            </CardTitle>
            <CardDescription>
              AI-categorized spending for this month
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockExpenses.map((expense, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${expense.color}`}></div>
                  <div>
                    <p className="font-medium">{expense.category}</p>
                    <p className="text-sm text-muted-foreground">${expense.amount}</p>
                  </div>
                </div>
                <Badge 
                  variant={expense.change < 0 ? "destructive" : "default"}
                  className={expense.change < 0 ? "bg-success/10 text-success hover:bg-success/20" : ""}
                >
                  {expense.change > 0 ? '+' : ''}{expense.change}%
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Goals Progress */}
        <Card className="shadow-card bg-gradient-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="w-5 h-5 mr-2 text-primary" />
              Savings Goals
            </CardTitle>
            <CardDescription>
              Track your financial objectives
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {mockGoals.map((goal, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{goal.name}</span>
                  <span className="text-muted-foreground">
                    ${goal.current}/${goal.target}
                  </span>
                </div>
                <Progress value={goal.progress} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{goal.progress.toFixed(1)}% complete</span>
                  <span>${goal.target - goal.current} remaining</span>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4">
              Add New Goal
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights */}
      <Card className="shadow-card bg-gradient-success border-0">
        <CardHeader>
          <CardTitle className="text-success-foreground">AI Financial Insights</CardTitle>
          <CardDescription className="text-success-foreground/80">
            Personalized recommendations based on your spending patterns
          </CardDescription>
        </CardHeader>
        <CardContent className="text-success-foreground">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Spending Prediction</h4>
              <p className="text-sm text-success-foreground/90">
                Based on current trends, you're likely to spend $2,180 this month. 
                Consider reducing dining expenses by $150 to stay within budget.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Optimization Tip</h4>
              <p className="text-sm text-success-foreground/90">
                You could save $89/month by switching to a student meal plan. 
                This would help you reach your laptop goal 2 months earlier.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;