import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://wvjxqbyymexfotocqwln.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2anhxYnl5bWV4Zm90b2Nxd2xuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyMjA4NzAsImV4cCI6MjA1Mjc5Njg3MH0.CKQ-EXpFZqLezONsuEDnSyyZZZjIyME4LBDqIEqTT2c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
