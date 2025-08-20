import { Calendar, Home, Inbox, Search, Settings, type LucideIcon } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

type Item = {
  title: string
  url: string
  icon: LucideIcon
}

const items: Item[] = [
  { title: "¿Quiénes somos?", url: "#", icon: Home },
  { title: "Integrantes", url: "#", icon: Inbox },
  { title: "Proyectos", url: "#", icon: Calendar },
  { title: "Actividades", url: "#", icon: Search },
  { title: "Grupos y redes", url: "#", icon: Settings },
  { title: "Archivo digital", url: "#", icon: Settings },
  { title: "Noticias", url: "#", icon: Settings },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item: Item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}