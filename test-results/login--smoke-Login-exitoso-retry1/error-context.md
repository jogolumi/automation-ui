# Page snapshot

```yaml
- generic [ref=e1]:
  - heading "Publi legal Iniciar sesión" [level=1] [ref=e3]:
    - text: Publi legal
    - text: Iniciar sesión
  - generic [ref=e5]:
    - generic [ref=e8]:
      - generic [ref=e10]: 
      - textbox "Usuario" [ref=e11]: usuario_test
    - generic [ref=e14]:
      - generic [ref=e16]: "*"
      - textbox "Contraseña" [ref=e17]: password_test
    - generic [ref=e18]:
      - button "Ingresar" [ref=e20] [cursor=pointer]
      - link "Registrarse" [ref=e22] [cursor=pointer]:
        - /url: /index.php?r=site/register&planId=1
    - link "* Recuperar contraseña" [ref=e24] [cursor=pointer]:
      - /url: /index.php?r=site/forgot
```