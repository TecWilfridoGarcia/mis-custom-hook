
# useForm Hook

Ejemplo de uso:

```
  const initialForm = {
    nombre:'',
    age:0

  }
  const url = 'endpoint de una api';
  const [values, handleInputChange, reset] = useForm( initialForm );
```