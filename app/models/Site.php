<?php

class Site {
    private $id;
    private $title;
    private $url;
    private $createdAt;

    public function __construct($id, $title, $url, $createdAt) {
        $this->id = $id;
        $this->title = $title;
        $this->url = $url;
        $this->createdAt = $createdAt;
    }

    // Getter et Setter pour chaque propriété

    public function getId() {
        return $this->id;
    }

    public function getTitle() {
        return $this->title;
    }

    public function setTitle($title) {
        $this->title = $title;
    }

    public function getUrl() {
        return $this->url;
    }

    public function setUrl($url) {
        $this->url = $url;
    }

    public function getCreatedAt() {
        return $this->createdAt;
    }

    public function setCreatedAt($createdAt) {
        $this->createdAt = $createdAt;
    }

    // Autres méthodes pour les fonctionnalités liées aux sites

    public function create() {
        // Logique pour créer un nouveau site dans la base de données
    }

    public function update() {
        // Logique pour mettre à jour les informations d'un site dans la base de données
    }

    public function delete() {
        // Logique pour supprimer un site de la base de données
    }

    // Autres méthodes...

}
