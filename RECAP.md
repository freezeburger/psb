
# Angular  Recap.

> Angular est un Framework Web de UI basé sur les composants.
> 5 Concepts Architecturaux porté par 19 décorateurs.

## Outils

## json-server
> Permet de "mocker" une API rest

```
npm i json-server -D
```

Créer le fichier de données eg.  `data.json`

Ajouter un script dans le `package.json`

```json
"scripts": {
    "api":"json-server ./api/data.json -p 5050 -w"
  },
```

## compodoc
> Génération de la documentation

```
npm i @compodoc/compodoc -D
```

Créer le fichier de données eg.  `tsconfig.doc.json`

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/app",
    "types": []
  },
  "include": [
    "src/main.ts",
    "src/polyfills.ts",
    "src/**/*.ts"
  ],
  "exclude": [
    "src/**/*.spec.ts"
  ]
}

```

Ajouter un script dans le `package.json`

```json
"scripts": {
    "doc": "compodoc -p ./tsconfig.doc.json -s"
  },
```

## angular/cli 
> L'angular/cli offre des commandes utiles pour la création du projet et de ses composantes.

**Creation de projet**
`ng new PROJECT_NAME`

**Démarrer le serveur de DEV**
`ng serve -o`

**Générer un CONCEPT**
`ng generate SCHEMATIC PATH/NAME [options]`
`ng g c NAME`
`ng g c PATH/NAME`

## 5 Concept

* Module
  * Component
  * Pipe
  * Directive
* Service

##  19 décorateurs.

* `@NgModule` 
* `@Component` 
* `@Pipe` 
* `@Directive` 
* `@Injectable` 
* `@Inject` 
* `@Input` 
* `@Output` 

> Les `Component, Pipe et Directive`  doivent appartenir à un module.

## Component

Un ensemble de code HTML CSS et JavaScript (exprimé en TypeScript)
Pour différentcier les composants des balises HTML standard les composant possède un préfixe.

```html

<header> <!-- Balise standard -->
<app-header> <!-- Component -->

```

## Component Template

Le HTML des composants bénéficie d'une syntaxe d'enrichissement.
* Directive
* Pipe
* Binding

```html
<!-- Binding Textuel -->
{{expression}} 

<!-- Binding Evenmentiel -->
<element (event)="expression"></element>
<button (click)="expression"></button>

<!-- Binding su Attribut -->
<img [src]="expression">

<!-- Binding Bidirectionnel-->
<input [(ngModel)]="expression">

<!-- Pipe-->
{{ expression | pipeName:parameters | pipeLast:parameters }}

<!-- Directive Répétition-->
<div *ngFor="let item of collection">{{item}}</div>

<!-- Directive Condition-->
<div *ngIf="expression">CONTENT</div>

```

## Component Communication

Les composant mette en oeuvre un communication en couche à travers :

* Des evenements ou `@Output`
* Des `@Input` ou valorisation de propriété

## Modularisation Applicative

Les modules sont des conteneurs abstrait permettant la strucuration du code source.
> Une bonne organisation des module apporte la "scalabilité" du code.

* Un module `Shared` pour exposé les élements communs.
* Un module `Feature` regroupant les composants complexe.
  * Un module dédié par feature.
* Un module `View` ou `Page` pour le gabarite de présentation.
