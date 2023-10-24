#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <windows.h> 

int main() {

    int convertir = 0;
    char *valeur;
    char *resulta;

    printf("\n_______        ___           ________ _______ \n|   _  \\      /   \\         /       ||   ____|\n|  |_)  |    /  ^  \\       |   (----`|  |__   \n|   _  <    /  /_\\  \\       \\   \\    |   __|  \n|  |_)  |  /  _____  \\  -----)   |   |  |____ \n|______/  /__/     \\__\\ |_______/    |_______|\n\n");
    printf("     ______________________________________\n    |                                      |\n    |            CONVERTIR BASE            |\n    |                                      |\n    |      base 2 -> base 10    | 1        |\n    |      base 10 -> base 2    | 2        |\n    |      base 16 -> base 10   | 3        |\n    |      base 10 -> base 16   | 4        |\n    |      Quitter              | 5        |\n    |                                      |\n    |______________________________________|\n");
    scanf("%d", &convertir);
    printf("Quelle est la valeur ?");
    scanf("%s", &valeur);

    if (convertir == 1 ) {

        int nombre = atoi(valeur);
        int n = nombre;
        int i, digit, sum = 0;
        int num_digits = floor(log10(abs(n))) + 1; // nombre de chiffres dans l'entier

        for (i = 0; i < num_digits; i++) {
            digit = (int)(n / pow(10, i)) % 10; // extraire le i-ème chiffre de l'entier
            sum += digit * pow(2, num_digits - i - 1); // ajouter digit * 2^(num_digits-i-1) à la somme
        }
        
        printf("r : %d", sum);
        scanf("%s", &valeur);

    } else if (convertir == 2) {
        


    } else if (convertir == 3) {
        


    } else if (convertir == 4) {
        


    } else {
        printf("Bye");
    }
    
    
    return 0;
}