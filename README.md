# oclock
Descriptif du projet

Le but de ce projet est de reproduire un minuteur, un chronomètre, un réveil, et une
horloge.
Il doit être possible d’augmenter le temps du minuteur grâce à des flèches, ou de rentrer
un “temps” grâce à un en input. Un bouton démarre ou stoppe le minuteur. Lorsque le
minuteur arrive à zéro, une alerte apparaît et indique que le temps est écoulé.
Pour le chronomètre, vous devrez le lancer et l’arrêter grâce à un même bouton (marche
/ arrêt). De plus, vous devrez implémenter un bouton “tour”, qui ajoutera le temps
affiché, au moment où l’utilisateur appuie, dans une liste “temps”. Un bouton reset sera
présent pour remettre le chrono à 0.
En ce qui concerne l’horloge, elle devra être à l’heure française (UTC + 1), fonctionnelle,
et donner l’heure, les minutes, et les secondes.
Enfin pour le réveil, l’utilisateur pourra entrer une heure et un texte en input. Lorsque
l’horloge atteindra l’heure entrée, une alerte (et pas une popup) apparaît indiquant le
message que l’utilisateur aura rentré. De plus, l’utilisateur aura la possibilité d’entrer
plusieurs alarmes qui seront affichées dans une liste, avec “passée” si l’heure de
l’alarme est passée, et “dans x temps” avec x représentant le temps restant avant que
l’heure ne soit atteinte.
