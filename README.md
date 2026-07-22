# Picture Automatic 🎬📺

Extension Safari pour activer automatiquement le Picture in Picture sur les vidéos YouTube quand vous changez de fenêtre.

## 🎯 Fonctionnalités

- ✅ Activation automatique du Picture in Picture au changement de fenêtre
- ✅ Détection intelligente des vidéos YouTube
- ✅ Compatible avec Safari sur macOS
- ✅ Léger et performant

## 📦 Installation sur Mac

### Option 1 : Installation locale (Développement)

1. **Clonez le repository** :
   ```bash
   git clone https://github.com/theblackmini2/picture-automatic.git
   cd picture-automatic
   ```

2. **Ouvrez Safari** et accédez à : `Développement > Charger une extension non signée...`
   - Si vous ne voyez pas le menu "Développement", activez-le :
     - Safari > Préférences > Onglet **Avancé**
     - Cochez ✓ "Afficher le menu Développement"

3. **Sélectionnez le dossier** `picture-automatic` du repository

4. **Autorisez l'extension** :
   - Safari > Préférences > Onglet **Extensions**
   - Trouvez "Picture Automatic"
   - Cochez ✓ "Autoriser sur des sites web visités"
   - Sélectionnez YouTube : "Toujours autoriser"

## 🚀 Utilisation

1. **Ouvrez YouTube** dans Safari
2. **Lancez une vidéo**
3. **Changez de fenêtre/application**
4. La vidéo basculera automatiquement en Picture in Picture ! 🎉

## 🔧 Configuration

Modifiez `content.js` pour ajuster :

```javascript
const PIP_CONFIG = {
  enabled: true,           // Activer/désactiver l'extension
  autoActivate: true,      // Activation automatique
  videoSelectors: [...]    // Sélecteurs CSS personnalisés
};
```

## 📋 Fichiers du projet

```
picture-automatic/
├── manifest.json       # Configuration de l'extension
├── content.js          # Script de contenu (gère les vidéos)
├── background.js       # Service worker (détecte les changements de fenêtre)
├── icons/              # Icônes de l'extension
└── README.md           # Ce fichier
```

## 🐛 Dépannage

### L'extension ne s'active pas ?
- Vérifiez que YouTube est autorisé dans Safari > Préférences > Extensions
- Rechargez YouTube (Cmd + R)
- Vérifiez la console (Safari > Développement > Console pour les erreurs)

### Le PiP ne s'active pas au changement de fenêtre ?
- Assurez-vous que la vidéo est en lecture (pas en pause)
- Vérifiez que Safari n'est pas en mode "Ne pas déranger"

### Erreurs de permission ?
- Acceptez les demandes de permission dans les Préférences Safari
- Relancez Safari complètement

## 📝 Notes

- ⚠️ Safari require que l'extension soit chargée manuellement (pas de soumission automatique au App Store pour les extensions de développement)
- 🔒 L'extension ne collecte aucune donnée personnelle
- 🔗 Fonctionne uniquement sur YouTube.com

## 🤝 Contribution

Pour signaler des bugs ou suggérer des améliorations :
- Créez une [issue](https://github.com/theblackmini2/picture-automatic/issues)
- Ou proposez une pull request

## 📄 Licence

MIT License - Libre d'utilisation

---

**Développé par theblackmini2** 🎬
