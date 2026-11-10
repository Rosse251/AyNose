import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { AudioProvider } from './context/AudioContext'
import { CartProvider } from './context/CartContext'
import { AIProvider } from './context/AIContext'
import { AuthProvider } from './context/AuthContext'
import { FavoriteProvider } from './context/FavoriteContext'

import { Navbar } from './components/navbar/Navbar'
import { Footer } from './components/footer/Footer'
import { AIAssistantDrawer } from './components/ai/AIAssistantDrawer'
import { CartDrawer } from './components/cart/CartDrawer'
import { Toast } from './components/common/Toast'
import { WhatsAppButton } from './components/common/WhatsAppButton'
import { PageCompanionMascot } from './components/mascot/PageCompanionMascot'

import { HomePage } from './pages/HomePage'
import { CatalogPage } from './pages/CatalogPage'
import { CategoryPage } from './pages/CategoryPage'
import { ProductDetailPage } from './pages/ProductDetailPage'
import { CartPage } from './pages/CartPage'
import { AccountPage } from './pages/AccountPage'
import { OrdersPage } from './pages/OrdersPage'
import { AdminPage } from './pages/AdminPage'
import { NotFoundPage } from './pages/NotFoundPage'

import { LoginPage } from './pages/auth/LoginPage'
import { RegisterPage } from './pages/auth/RegisterPage'
import { ForgotPasswordPage } from './pages/auth/ForgotPasswordPage'

export function App() {
  return (
    <AudioProvider>
      <AuthProvider>
        <CartProvider>
          <FavoriteProvider>
            <AIProvider>
              <Router>
                <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#101014' }}>
                  <Navbar />

                  <main style={{ flex: 1 }}>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/catalogo" element={<CatalogPage />} />
                      
                      {/* Las 5 Categorías Oficiales de Tienda - Héroe y alias legacy */}
                      <Route path="/comics" element={<CategoryPage categorySlug="comics" />} />
                      <Route path="/manga-anime" element={<CategoryPage categorySlug="manga-anime" />} />
                      <Route path="/manga" element={<CategoryPage categorySlug="manga-anime" />} />
                      <Route path="/videojuegos" element={<CategoryPage categorySlug="videojuegos" />} />
                      <Route path="/figuras-coleccionables" element={<CategoryPage categorySlug="figuras-coleccionables" />} />
                      <Route path="/figuras" element={<CategoryPage categorySlug="figuras-coleccionables" />} />
                      <Route path="/coleccionables" element={<CategoryPage categorySlug="figuras-coleccionables" />} />
                      <Route path="/accesorios-geek" element={<CategoryPage categorySlug="accesorios-geek" />} />
                      <Route path="/ropa" element={<CategoryPage categorySlug="accesorios-geek" />} />

                      <Route path="/producto/:id" element={<ProductDetailPage />} />
                      <Route path="/carrito" element={<CartPage />} />

                      {/* Admin & Database Explorer Route (Protegido para francodulcemaria89@gmail.com) */}
                      <Route path="/admin" element={<AdminPage />} />

                      {/* Auth Routes */}
                      <Route path="/login" element={<LoginPage />} />
                      <Route path="/registro" element={<RegisterPage />} />
                      <Route path="/recuperar-contrasena" element={<ForgotPasswordPage />} />

                      {/* Account Routes */}
                      <Route path="/cuenta" element={<AccountPage />} />
                      <Route path="/cuenta/*" element={<AccountPage />} />
                      <Route path="/pedidos" element={<OrdersPage />} />

                      <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                  </main>

                  <Footer />

                  {/* Botón flotante directo de WhatsApp (0981 687114) */}
                  <WhatsAppButton />

                  {/* Asistente Inteligente HERO AI y Mascota Acompañante Móvil */}
                  <AIAssistantDrawer />
                  <PageCompanionMascot />
                  <CartDrawer />
                  <Toast />
                </div>
              </Router>
            </AIProvider>
          </FavoriteProvider>
        </CartProvider>
      </AuthProvider>
    </AudioProvider>
  )
}

export default App
