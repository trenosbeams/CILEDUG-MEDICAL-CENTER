"use client"

import { useState } from "react"
import { Users, Calendar, DollarSign, Activity, Shield, Bell, LogOut, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AdminDashboard() {
  const [admin] = useState({
    name: "Dr. Bambang Sutrisno",
    role: "Direktur Utama",
    id: "ADM-001",
    department: "Manajemen",
    email: "direktur@ciledugmc.com",
  })

  const stats = [
    { title: "Total Pasien Hari Ini", value: "156", change: "+12%", icon: Users, color: "blue" },
    { title: "Pendapatan Bulan Ini", value: "2.4M", change: "+8%", icon: DollarSign, color: "green" },
    { title: "Bed Occupancy Rate", value: "78%", change: "+5%", icon: Activity, color: "purple" },
    { title: "Staff On Duty", value: "89", change: "-2%", icon: Shield, color: "orange" },
  ]

  const recentActivities = [
    {
      id: 1,
      type: "patient",
      message: "Pasien baru terdaftar: Ahmad Rizki",
      time: "5 menit yang lalu",
      urgent: false,
    },
    {
      id: 2,
      type: "emergency",
      message: "Kasus darurat di IGD: Kecelakaan lalu lintas",
      time: "15 menit yang lalu",
      urgent: true,
    },
    {
      id: 3,
      type: "system",
      message: "Backup database berhasil dilakukan",
      time: "1 jam yang lalu",
      urgent: false,
    },
    {
      id: 4,
      type: "staff",
      message: "Dr. Sari Indrawati check-in untuk shift malam",
      time: "2 jam yang lalu",
      urgent: false,
    },
  ]

  const departmentStats = [
    { name: "IGD", patients: 45, revenue: "450K", occupancy: "95%" },
    { name: "Rawat Inap", patients: 78, revenue: "1.2M", occupancy: "78%" },
    { name: "Poliklinik", patients: 123, revenue: "680K", occupancy: "65%" },
    { name: "Laboratorium", patients: 89, revenue: "320K", occupancy: "45%" },
  ]

  const pendingApprovals = [
    {
      id: 1,
      type: "Pengadaan Alat Medis",
      requestor: "Dr. Ahmad Santoso",
      amount: "150,000,000",
      priority: "high",
    },
    {
      id: 2,
      type: "Cuti Karyawan",
      requestor: "Sari Dewi (Perawat)",
      amount: "7 hari",
      priority: "medium",
    },
    {
      id: 3,
      type: "Renovasi Ruangan",
      requestor: "Tim Maintenance",
      amount: "75,000,000",
      priority: "low",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="bg-purple-600 text-white p-2 rounded-lg">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Dashboard Admin</h1>
                <p className="text-sm text-gray-600">Ciledug Medical Center</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifikasi
              </Button>
              <Button variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Keluar
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Admin Info */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Profil Admin
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Shield className="h-10 w-10 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{admin.name}</h3>
                  <p className="text-sm text-gray-600">{admin.role}</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">ID Admin:</span>
                    <p className="text-gray-600">{admin.id}</p>
                  </div>
                  <div>
                    <span className="font-medium">Departemen:</span>
                    <p className="text-gray-600">{admin.department}</p>
                  </div>
                  <div>
                    <span className="font-medium">Email:</span>
                    <p className="text-gray-600">{admin.email}</p>
                  </div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Edit Profil</Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Stats Overview */}
            <div className="grid md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        <div className="flex items-center mt-1">
                          <TrendingUp className="h-3 w-3 text-green-600 mr-1" />
                          <span className="text-xs text-green-600">{stat.change}</span>
                        </div>
                      </div>
                      <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                        <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Department Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Performa Departemen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {departmentStats.map((dept, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-gray-900">{dept.name}</h4>
                        <p className="text-sm text-gray-600">{dept.patients} pasien hari ini</p>
                      </div>
                      <div className="flex items-center gap-6 text-sm">
                        <div className="text-center">
                          <p className="font-semibold text-green-600">Rp {dept.revenue}</p>
                          <p className="text-gray-500">Pendapatan</p>
                        </div>
                        <div className="text-center">
                          <p className="font-semibold text-blue-600">{dept.occupancy}</p>
                          <p className="text-gray-500">Okupansi</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activities & Pending Approvals */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Recent Activities */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Aktivitas Terbaru
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-start gap-3">
                        <div
                          className={`w-2 h-2 rounded-full mt-2 ${activity.urgent ? "bg-red-500" : "bg-green-500"}`}
                        />
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">{activity.message}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Pending Approvals */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Persetujuan Pending
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pendingApprovals.map((approval) => (
                      <div key={approval.id} className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-gray-900 text-sm">{approval.type}</h4>
                          <Badge
                            variant={
                              approval.priority === "high"
                                ? "destructive"
                                : approval.priority === "medium"
                                  ? "default"
                                  : "secondary"
                            }
                            className="text-xs"
                          >
                            {approval.priority === "high"
                              ? "Tinggi"
                              : approval.priority === "medium"
                                ? "Sedang"
                                : "Rendah"}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-600 mb-1">{approval.requestor}</p>
                        <p className="text-xs text-gray-600 mb-3">Nilai: {approval.amount}</p>
                        <div className="flex gap-2">
                          <Button size="sm" className="bg-green-600 hover:bg-green-700 text-xs">
                            Setujui
                          </Button>
                          <Button size="sm" variant="outline" className="text-xs">
                            Review
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
