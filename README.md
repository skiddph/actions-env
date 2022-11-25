# actions-env
GitHub Actions for creating `.env` file using GutHub's Secret

# Usage Example
Example workflow file:

```yaml
# ... other things here
jobs:
    create_env_file:
        runs-on: ubuntu-latest
        steps:
         - name: Create .env file
           uses: eru123/actions-env@v0.0.3
           with:
            file: .env # default | a path or filename
            prefix: 'ENV_' # default | must be uppercase
            env: |
                ENV_VAR1=${{ secrets.VAR1 }}
                ENV_VAR2=${{ secrets.VAR2 }}
                ENV_VAR3=${{ secrets.VAR3 }}
                ENV_VAR4=${{ secrets.VAR4 }}
           
```

Example `.env` file:
```env
VAR1=value
VAR2=value
VAR3=value
VAR4=value
```

# Inputs
| Name | Description | Default | Required |
| --- | --- | --- | --- |
| `file` | Path to the file to be created | `.env` | No |
| `prefix` | Prefix for the environment variables | `ENV_` | No |
| `env` | Environment variables to be added to the file |     | No |

# LICENSE
This project is licensed under the terms of the [Apache-2.0 license](LICENSE).