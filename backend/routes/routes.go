package routes

import (
    "github.com/gorilla/mux"
    "backend/handlers"
)

func RegisterRoutes(router *mux.Router) {
    router.HandleFunc("/api/services", handlers.GetServices).Methods("GET")
    router.HandleFunc("/api/services/{id}", handlers.GetService).Methods("GET")
    router.HandleFunc("/api/services", handlers.CreateService).Methods("POST")
    router.HandleFunc("/api/services/{id}", handlers.UpdateService).Methods("PUT")
    router.HandleFunc("/api/services/{id}", handlers.DeleteService).Methods("DELETE")
}
