import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2'

const supabaseUrl = 'YOUR_SUPABASE_URL'    // Replace with your URL
const supabaseKey = 'YOUR_SUPABASE_KEY'    // Replace with your key
const supabase = createClient(supabaseUrl, supabaseKey)

async function fetchContent() {
    try {
        const { data, error } = await supabase
            .from('landing_page')
            .select('*')
        if (error) throw error
        
        const contentDiv = document.getElementById('content')
        if (data && data[0]) {
            contentDiv.innerHTML = `
                <h1>${data[0].title}</h1>
                <p>${data[0].content}</p>
            `
        }
    } catch (error) {
        console.error('Error:', error)
    }
}

fetchContent()
