const SUPABASE_URL = 'https://mldsexrzrrvgplhibdyy.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_-NjEOi5cEJNDdklouCIylA_8VXmQBtP';
const SUPABASE_SERVICE_ROLE_KEY = 'sb_secret_ZuWHpzcXGtJwftK3_mIMhg_0E0GJb3k';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const supabaseAdmin = window.supabase.createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

async function signUp() {
    console.log('1. signUp ВЫЗВАНА!');
    alert('Кнопка работает! signUp вызвана. Следующий шаг — запрос к Supabase.');
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const { data, error } = await supabase.auth.signUp({ email, password });
    console.log('Ответ от Supabase:', { data, error });
    document.getElementById('auth-status').innerText = error ? 'Ошибка: ' + error.message : 'Успешно!';
}