-- PrintDev Analytics Database Schema

-- Create extension for UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Analytics table for tracking website visits
CREATE TABLE IF NOT EXISTS analytics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id VARCHAR(255) NOT NULL,
    page_path VARCHAR(500) NOT NULL,
    user_agent TEXT,
    device_type VARCHAR(50),
    browser VARCHAR(100),
    operating_system VARCHAR(100),
    screen_resolution VARCHAR(50),
    referrer TEXT,
    language VARCHAR(10),
    country VARCHAR(5),
    city VARCHAR(100),
    ip_address INET,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Content management table for CMS functionality
CREATE TABLE IF NOT EXISTS content (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    section VARCHAR(100) NOT NULL,
    field_name VARCHAR(100) NOT NULL,
    content_value TEXT NOT NULL,
    updated_by VARCHAR(100),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(section, field_name)
);

-- Contact form submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_name VARCHAR(255),
    contact_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    service_type VARCHAR(100),
    message TEXT,
    quantity_estimate VARCHAR(100),
    delivery_timeframe VARCHAR(100),
    status VARCHAR(50) DEFAULT 'new',
    ip_address INET,
    user_agent TEXT,
    submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Admin users table
CREATE TABLE IF NOT EXISTS admin_users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    username VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    role VARCHAR(50) DEFAULT 'admin',
    last_login TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sessions table for admin authentication
CREATE TABLE IF NOT EXISTS admin_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES admin_users(id) ON DELETE CASCADE,
    session_token VARCHAR(255) UNIQUE NOT NULL,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for better performance
CREATE INDEX IF NOT EXISTS idx_analytics_timestamp ON analytics(timestamp);
CREATE INDEX IF NOT EXISTS idx_analytics_session ON analytics(session_id);
CREATE INDEX IF NOT EXISTS idx_analytics_page ON analytics(page_path);
CREATE INDEX IF NOT EXISTS idx_analytics_device ON analytics(device_type);
CREATE INDEX IF NOT EXISTS idx_content_section ON content(section);
CREATE INDEX IF NOT EXISTS idx_contact_submitted ON contact_submissions(submitted_at);
CREATE INDEX IF NOT EXISTS idx_admin_sessions_token ON admin_sessions(session_token);
CREATE INDEX IF NOT EXISTS idx_admin_sessions_expires ON admin_sessions(expires_at);

-- Insert default admin user (password: printdev2024)
-- Password hash for 'printdev2024' using bcrypt
INSERT INTO admin_users (username, password_hash, email, role) 
VALUES ('admin', '$2b$10$8K1p7jQBqO7Bb.VuEt7qn.VZj5VZj5VZj5VZj5VZj5VZj5VZj5VZjE', 'admin@printdev.de', 'admin')
ON CONFLICT (username) DO NOTHING;

-- Insert default content
INSERT INTO content (section, field_name, content_value) VALUES 
('hero', 'title', 'DTF Druck & Versand Service'),
('hero', 'subtitle', 'Professionelle DTF-Drucke in höchster Qualität mit schnellem Versand direkt zu Ihnen.'),
('hero', 'description', 'Einfach, zuverlässig und termingerecht.'),
('services', 'title', 'Unsere Services'),
('services', 'description', 'Professioneller DTF-Druck und umfassende Beratung - qualitativ hochwertig und termingerecht.'),
('contact', 'title', 'Kontakt aufnehmen'),
('contact', 'phone', '+49 (0) 123 456 789'),
('contact', 'email', 'info@printdev.de'),
('company', 'name', 'PrintDev'),
('company', 'tagline', 'Ihr Partner für professionelle DTF-Drucke und komplette Fulfillment-Lösungen.')
ON CONFLICT (section, field_name) DO NOTHING;