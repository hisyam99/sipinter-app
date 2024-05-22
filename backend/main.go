package main

import (
	"backend/handlers"
	"backend/utils"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	router := mux.NewRouter()

	utils.ConnectDB() // Connect to the database

	router.HandleFunc("/api/services", handlers.GetServices).Methods("GET")
	router.HandleFunc("/api/services/{id}", handlers.GetService).Methods("GET")
	router.HandleFunc("/api/services", handlers.CreateService).Methods("POST")
	router.HandleFunc("/api/services/{id}", handlers.UpdateService).Methods("PUT")
	router.HandleFunc("/api/services/{id}", handlers.DeleteService).Methods("DELETE")

	log.Println("Starting server on :8080")
	log.Fatal(http.ListenAndServe(":8080", router))
}
