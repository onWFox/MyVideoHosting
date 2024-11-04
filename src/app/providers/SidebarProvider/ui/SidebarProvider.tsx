import React, { createContext, useContext, useState, ReactNode } from "react";

// Определяем типы для контекста
interface SidebarContextType {
  show: boolean;
  toggleSidebar: () => void;
}

// Создаем контекст с начальным значением undefined
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [show, setIsSidebarOpen] = useState(false);

  // Функция для переключения состояния сайдбара
  const toggleSidebar = () => setIsSidebarOpen(!show);

  return (
    <SidebarContext.Provider value={{ show, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Хук для доступа к контексту
export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebarContext must be used within a SidebarProvider");
  }
  return context;
};
