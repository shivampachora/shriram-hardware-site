import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nProvider } from "./lib/i18n";
import { MainLayout } from "./components/layout/MainLayout";
import NotFound from "@/pages/not-found";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Thibak from "./pages/Thibak";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

function Router() {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/explore" component={Explore} />
        <Route path="/thibak" component={Thibak} />
        <Route path="/categories" component={Categories} />
        <Route path="/products" component={Products} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </MainLayout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </I18nProvider>
    </QueryClientProvider>
  );
}

export default App;
