"use client"

import React from "react"
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import {
  Bell,
  LayoutDashboard,
  FolderKanban,
  Users2,
  UserRound,
  Target,
  FileText,
  Activity as ActivityIcon,
  Settings,
  LifeBuoy,
  LogOut,
  ShieldAlert,
  Search,
} from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet"

// Mock chart data
const projectsByType = [
  { type: "Web", count: 18 },
  { type: "API", count: 29 },
  { type: "Cloud", count: 21 },
  { type: "Network", count: 26 },
  { type: "Android", count: 12 },
  { type: "Other", count: 15 },
]

const vulnerabilities = [
  { name: "Critical", value: 52.1, color: "#ef4444" },
  { name: "High", value: 22.8, color: "#f59e0b" },
  { name: "Medium", value: 13.9, color: "#fbbf24" },
  { name: "Low", value: 11.2, color: "#22c55e" },
]

const projectsActivity = [
  { month: "Jan", value: 14 },
  { month: "Feb", value: 27 },
  { month: "Mar", value: 16 },
  { month: "Apr", value: 23 },
  { month: "May", value: 12 },
  { month: "Jun", value: 18 },
  { month: "Jul", value: 15 },
  { month: "Aug", value: 28 },
  { month: "Sep", value: 17 },
  { month: "Oct", value: 31 },
  { month: "Nov", value: 19 },
  { month: "Dec", value: 22 },
]

const activities = [
  {
    name: "Natali Craig",
    message: "You have a bug that needs to be fixed",
    time: "Just now",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Andi Lane",
    message: "Released a new version",
    time: "59 minutes ago",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Drew Cano",
    message: "Modified 4 data in Page X",
    time: "Today, 11:59 AM",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop",
  },
]

// Notifications list
const notifications = [
  { title: "You fixed a bug", time: "Just now" },
  { title: "New user registered", time: "5 minutes ago" },
  { title: "Andi Lane subscribed to you.", time: "Today, 11:59 AM" },
  { title: "You fixed a bug", time: "12 hours ago" },
  { title: "New user registered", time: "5 minutes ago" },
  { title: "You fixed a bug", time: "5 minutes ago" },
]

export default function DashboardPage() {
  const [notifOpen, setNotifOpen] = React.useState(false)
  return (
    <SidebarProvider>
      {/* Sidebar */}
      <Sidebar variant="inset" collapsible="icon">
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2 py-1.5">
            <div className="size-8 grid place-items-center rounded-md bg-black text-white font-bold">
              R
            </div>
            <div>
              <div className="text-sm font-semibold">Radar 36</div>
              <div className="text-xs text-muted-foreground">Menu</div>
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>
                  <LayoutDashboard />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <FolderKanban />
                  <span>Projects</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Users2 />
                  <span>Clients</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <UserRound />
                  <span>Team Members</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Target />
                  <span>Scope</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <FileText />
                  <span>Files</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <ActivityIcon />
                  <span>Activity</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
          <SidebarSeparator />
          <SidebarGroup>
            <SidebarGroupLabel>Generals</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Settings />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <LifeBuoy />
                  <span>Help & Support</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <LogOut />
                  <span className="font-semibold">Log out</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            {/* remove Log out from footer */}
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      {/* Main */}
      <SidebarInset>
        {/* Header */}
        <header className="sticky top-0 z-10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
          <div className={`max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 ${notifOpen ? "pr-[360px] sm:pr-[420px]" : ""}`}>
            <SidebarTrigger />
            <div className="ml-1">
              <div className="text-sm text-muted-foreground">Good Morning,</div>
              <div className="text-lg font-semibold">Charlie</div>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input placeholder="Search" className="h-9 w-64 pl-8" />
              </div>
              {/* Notifications Sheet */}
              <Sheet open={notifOpen} onOpenChange={setNotifOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="h-9 w-9">
                    <Bell className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[360px] sm:w-[420px]">
                  <SheetHeader>
                    <SheetTitle>Notifications</SheetTitle>
                    <SheetDescription>Recent updates and alerts</SheetDescription>
                  </SheetHeader>
                  <div className="mt-4 space-y-3">
                    {notifications.map((n, i) => (
                      <div key={i} className="flex items-start gap-3 rounded-md border bg-muted/50 p-3">
                        <div className="size-8 shrink-0 grid place-items-center rounded-md bg-indigo-100 text-indigo-700">🔔</div>
                        <div className="space-y-0.5">
                          <div className="text-sm font-medium leading-none">{n.title}</div>
                          <div className="text-xs text-muted-foreground">{n.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
              <Avatar className="h-9 w-9">
                <AvatarImage src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&auto=format&fit=crop" />
                <AvatarFallback>CH</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        <main className={`max-w-7xl mx-auto p-4 md:p-6 space-y-4 ${notifOpen ? "pr-[360px] sm:pr-[420px]" : ""}`}>
          {/* Top Row: Title + actions */}
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold">Dashboard Overview</h2>
            <div className="flex items-center gap-2">
              <Select defaultValue="this-month">
                <SelectTrigger size="sm">
                  <SelectValue placeholder="This Month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Range</SelectLabel>
                    <SelectItem value="this-week">This Week</SelectItem>
                    <SelectItem value="this-month">This Month</SelectItem>
                    <SelectItem value="last-month">Last Month</SelectItem>
                    <SelectItem value="this-quarter">This Quarter</SelectItem>
                    <SelectItem value="this-year">This Year</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Button className="bg-indigo-600 hover:bg-indigo-600/90">Export Report</Button>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {/* Total Projects */}
            <Card className="bg-violet-50 border-transparent">
              <CardHeader className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-8 rounded-md bg-violet-500 text-white grid place-items-center">
                    <LayoutDashboard className="size-4" />
                  </div>
                  <div>
                    <CardDescription>Total Projects</CardDescription>
                    <CardTitle className="text-2xl">7,265</CardTitle>
                  </div>
                </div>
                <div className="flex flex-col items-end leading-none">
                  <span className="text-xs text-green-600 font-medium">+11.01%</span>
                  <span className="text-base">📈</span>
                </div>
              </CardHeader>
            </Card>
            {/* Active Projects */}
            <Card className="bg-sky-50 border-transparent">
              <CardHeader className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-8 rounded-md bg-sky-500 text-white grid place-items-center">
                    <FolderKanban className="size-4" />
                  </div>
                  <div>
                    <CardDescription>Active Projects</CardDescription>
                    <CardTitle className="text-2xl">3,671</CardTitle>
                  </div>
                </div>
                <div className="flex flex-col items-end leading-none">
                  <span className="text-xs text-red-600 font-medium">-0.03%</span>
                  <span className="text-base">📈</span>
                </div>
              </CardHeader>
            </Card>
            {/* Vulnerabilities */}
            <Card className="bg-orange-50 border-transparent">
              <CardHeader className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-8 rounded-md bg-orange-500 text-white grid place-items-center">
                    <ShieldAlert className="size-4" />
                  </div>
                  <div>
                    <CardDescription>Vulnerabilities</CardDescription>
                    <CardTitle className="text-2xl">156</CardTitle>
                  </div>
                </div>
                <div className="flex flex-col items-end leading-none">
                  <span className="text-xs text-orange-600 font-medium">+15.03%</span>
                  <span className="text-base">📈</span>
                </div>
              </CardHeader>
            </Card>
            {/* Clients */}
            <Card className="bg-indigo-50 border-transparent">
              <CardHeader className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-8 rounded-md bg-indigo-500 text-white grid place-items-center">
                    <Users2 className="size-4" />
                  </div>
                  <div>
                    <CardDescription>Clients</CardDescription>
                    <CardTitle className="text-2xl">2,318</CardTitle>
                  </div>
                </div>
                <div className="flex flex-col items-end leading-none">
                  <span className="text-xs text-green-600 font-medium">+6.03%</span>
                  <span className="text-base">📈</span>
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Charts Row */}
          <div className="grid gap-4 lg:grid-cols-3">
            <Card className="lg:col-span-2 bg-gray-50 border-transparent">
              <CardHeader className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-base">Projects by Type</CardTitle>
                  <CardDescription>Distribution by category</CardDescription>
                </div>
                <Select defaultValue="aug">
                  <SelectTrigger size="sm">
                    <SelectValue placeholder="Aug" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="jun">Jun</SelectItem>
                      <SelectItem value="jul">Jul</SelectItem>
                      <SelectItem value="aug">Aug</SelectItem>
                      <SelectItem value="sep">Sep</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{ count: { label: "Projects", color: "hsl(var(--chart-3))" } }}
                  className="h-[360px]"
                >
                  <BarChart data={projectsByType} barSize={24}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="type" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                      {projectsByType.map((_, i) => {
                        const colors = ["#60a5fa", "#34d399", "#a78bfa", "#22d3ee", "#86efac", "#cbd5e1"]
                        return <Cell key={i} fill={colors[i % colors.length]} />
                      })}
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="bg-orange-50/50 border-transparent">
              <CardHeader>
                <CardTitle className="text-base">Vulnerabilities</CardTitle>
                <CardDescription>By severity</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 items-center gap-4 h-[360px]">
                <ChartContainer
                  config={{
                    critical: { label: "Critical", color: "#ef4444" },
                    high: { label: "High", color: "#f59e0b" },
                    medium: { label: "Medium", color: "#fbbf24" },
                    low: { label: "Low", color: "#22c55e" },
                  }}
                  className="aspect-square max-h-full"
                >
                  <PieChart>
                    <Pie
                      data={vulnerabilities}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={55}
                      outerRadius={90}
                      paddingAngle={6}
                    >
                      {vulnerabilities.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ChartContainer>
                <div className="space-y-3 text-sm">
                  {vulnerabilities.map((v) => (
                    <div key={v.name} className="flex items-center justify-between gap-6">
                      <div className="flex items-center gap-2">
                        <span className="size-2.5 rounded-sm" style={{ background: v.color }} />
                        <span className="text-muted-foreground">{v.name}</span>
                      </div>
                      <span className="font-mono tabular-nums">{v.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Activity Bar + Members */}
          <Card className="bg-gray-50 border-transparent">
            <CardHeader className="flex items-center justify-between">
              <CardTitle className="text-base">Projects Activity</CardTitle>
              <Select defaultValue="y2025">
                <SelectTrigger size="sm">
                  <SelectValue placeholder="2025" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="y2023">2023</SelectItem>
                    <SelectItem value="y2024">2024</SelectItem>
                    <SelectItem value="y2025">2025</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{ value: { label: "Activity", color: "hsl(var(--chart-5))" } }}
                className="aspect-[16/5]"
              >
                <BarChart data={projectsActivity} barSize={18}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                    {projectsActivity.map((_, i) => {
                      const purples = ["#c7d2fe", "#a5b4fc", "#818cf8", "#6366f1", "#8b5cf6", "#7c3aed"]
                      return <Cell key={i} fill={purples[i % purples.length]} />
                    })}
                  </Bar>
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Members Activities */}
          <div className="grid gap-3 lg:grid-cols-4">
            {activities.map((a, i) => (
              <Card key={i} className="lg:col-span-1 bg-violet-50 border-transparent">
                <CardContent className="flex items-start gap-3 py-5">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={a.avatar} alt={a.name} />
                    <AvatarFallback>{a.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <div className="text-sm font-medium">{a.name}</div>
                    <div className="text-sm text-muted-foreground">{a.message}</div>
                    <div className="text-xs text-muted-foreground">{a.time}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Card className="lg:col-span-1 bg-violet-50 border-transparent">
              <CardContent className="flex items-center justify-between py-5">
                <div>
                  <div className="text-sm font-medium">View Full Details</div>
                  <div className="text-xs text-muted-foreground">Today: 11:59 AM</div>
                </div>
                <Button variant="outline" size="sm">Open</Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}