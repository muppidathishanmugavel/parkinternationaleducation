-- ====================================================================
-- SUPABASE POSTGRESQL SCHEMA FOR PARK INTERNATIONAL EDUCATION
-- Table: students (Admissions & College Fee Management)
-- ====================================================================

-- 1. Create the primary students table
CREATE TABLE IF NOT EXISTS public.students (
    id TEXT PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    date TEXT,
    source TEXT DEFAULT 'Website Inquiry',
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    course TEXT DEFAULT 'Medicine (MBBS)',
    country TEXT DEFAULT 'Uzbekistan',
    uni TEXT,
    city TEXT DEFAULT 'Tamil Nadu',
    branch TEXT DEFAULT 'Tirunelveli Head Office',
    stage TEXT DEFAULT 'New Enquiry',
    total_fees NUMERIC DEFAULT 0,
    paid_fees NUMERIC DEFAULT 0,
    balance_fees NUMERIC DEFAULT 0,
    fee_currency TEXT DEFAULT 'INR',
    current_position TEXT,
    reqs TEXT,
    remarks TEXT
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;

-- 3. Create permissive policies for authenticated / anon API access
CREATE POLICY "Allow read access to students" 
ON public.students 
FOR SELECT 
USING (true);

CREATE POLICY "Allow insert access to students" 
ON public.students 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow update access to students" 
ON public.students 
FOR UPDATE 
USING (true);

CREATE POLICY "Allow delete access to students" 
ON public.students 
FOR DELETE 
USING (true);

-- 4. Index for ultra-fast search by name, phone, course, and stage
CREATE INDEX IF NOT EXISTS idx_students_phone ON public.students(phone);
CREATE INDEX IF NOT EXISTS idx_students_stage ON public.students(stage);
CREATE INDEX IF NOT EXISTS idx_students_course ON public.students(course);

-- 5. Add to realtime publication for instant multi-branch sync
ALTER PUBLICATION supabase_realtime ADD TABLE public.students;
