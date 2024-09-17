import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://uqjbpshtmxyaxqbliwlk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxamJwc2h0bXh5YXhxYmxpd2xrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ2NzI4MDgsImV4cCI6MjA0MDI0ODgwOH0._NNc2jyy5jYTxaTQjCgyNboXe17HbncIgEpPqwntolY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
