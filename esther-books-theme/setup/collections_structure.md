# Architecture des Collections

## Structure Principale

1.  **Rabbi Nachman**
    *   Handle: `rabbi-nachman`
    *   Condition: `custom.author` CONTAINS "Rabbi Nachman"
2.  **Rabbi Nathan**
    *   Handle: `rabbi-nathan`
    *   Condition: `custom.author` CONTAINS "Rabbi Nathan"
3.  **Commentaires**
    *   Handle: `commentaires`
    *   Condition: Product Tag EQUALS "Commentaire"
4.  **Biographies**
    *   Handle: `biographies`
    *   Condition: Product Type EQUALS "Biographie"
5.  **Enfants**
    *   Handle: `enfants`
    *   Condition: Product Tag EQUALS "Enfants" OR "Jeunesse"

## Types de Produits (Product Types)

*   Livre Relié
*   Livre Broché
*   Kountrass
*   Pack
*   E-book
*   Audio
