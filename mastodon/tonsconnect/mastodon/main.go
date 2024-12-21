package main

import (
    "fmt"
    "log"
    "net/http"
)

func main() {
    http.HandleFunc("/", handleHome)
    
    fmt.Println("Server starting on http://localhost:8080")
    if err := http.ListenAndServe(":8080", nil); err != nil {
        log.Fatal(err)
    }
}

func handleHome(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Welcome to GoCodeo!")
} 