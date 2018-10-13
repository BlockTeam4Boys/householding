package main
import (
  "net/http"
)

func main() {
  // обработчик на статику
  js := http.FileServer(http.Dir("js"))
  http.Handle("/js/", http.StripPrefix("/js/", js))

  // обработчики запросов
  http.HandleFunc("/home", func(w http.ResponseWriter, r *http.Request) {
      http.ServeFile(w, r, "templates/login.html")
  })

  http.HandleFunc("/sale", func(w http.ResponseWriter, r *http.Request) {
      http.ServeFile(w, r, "templates/Sale.html")
  })

  http.HandleFunc("/public", func(w http.ResponseWriter, r *http.Request) {
      http.ServeFile(w, r, "templates/public.html")
  })

  // да будет http!
  http.ListenAndServe(":3002", nil)
}
