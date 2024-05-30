export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie("token").value;

  if (token && to.path === "/") return navigateTo("/dashboard");

  if (!token && to.path !== "/") {
    return navigateTo("/");
  }
});
