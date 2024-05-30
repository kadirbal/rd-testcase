export default defineEventHandler(async (event) => {
    const form: {username: string, password: string} = await readBody(event)
    console.log(form)
   const {jwt}: {jwt: string} = await $fetch(`https://recruitment-api.vercel.app/login`, {
        method:'post',
        body: JSON.stringify(form)
    })
    setCookie(event, 'token', jwt)
    await sendRedirect(event, '/dashboard')
})