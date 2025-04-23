---
sidebar_position: 1
title: "Conda Quick Reference"
metaTitle: "Quick Reference"
metaDescription: "Quick Reference"
---

## Creating new Conda environment

To create a new **Conda environment**, use the `conda create` command. Here's the basic syntax:

```bash
conda create --name <env_name> python=<version>
```

### Example:
```bash
conda create --name myenv python=3.10
```

This will:
- Create a new environment named `myenv`
- Install Python 3.10 in it

### After creating the environment:
Activate it with:
```bash
conda activate myenv
```

To deactivate it and return to the base environment:
```bash
conda deactivate
```

### Adding packages during environment creation
```bash
conda create --name myenv python=3.10 numpy pandas
```
---

## Installing dependency in an active conda environment
To install a dependency (package) in an **active Conda environment**, use the following command:

### **Method 1: Install a Package in the Active Environment**
```sh
conda install <package_name>
```
Example:
```sh
conda install numpy
```

### **Method 2: Install from a Specific Conda Channel**
```sh
conda install -c <channel_name> <package_name>
```
Example (install `tensorflow` from `conda-forge`):
```sh
conda install -c conda-forge tensorflow
```

### **Method 3: Install Using Pip (if the package isn't available via Conda)**
```sh
pip install <package_name>
```
Example:
```sh
pip install openai
```

### **Best Practices**
1. **Check if the environment is activated**:
   - Run `conda activate <env_name>` (if not already active).
   - Verify using:
     ```sh
     conda env list
     ```
     (The active environment has an `*` next to it.)

2. **Specify a version** (recommended for reproducibility):
   ```sh
   conda install numpy=1.23.5
   ```

3. **Install multiple packages at once**:
   ```sh
   conda install pandas scikit-learn matplotlib
   ```

4. **Export environment for sharing** (after installing dependencies):
   ```sh
   conda env export > environment.yml
   ```

### **Troubleshooting**
- If Conda doesn’t find the package, try:
  - Searching first: `conda search <package_name>`
  - Using `conda-forge`: `conda install -c conda-forge <package_name>`
  - Falling back to `pip` (but prefer Conda when possible to avoid conflicts).

## Check Installed Dependency Versions in Conda

To determine the versions of Python dependencies installed in a running Conda environment, you have several options. Here are the most common methods:

### 1. **Using `conda list`**
Run this command from within your active Conda environment:

```bash
conda list
```

This will output a table of all installed packages and their versions, like:

```
# packages in environment at /path/to/env:
#
# Name                    Version                   Build  Channel
numpy                    1.24.3           py310h5f9c477_0
pandas                   1.5.3            py310h1c4a608_0
```

---

### 2. **Using `pip list`** (for pip-installed packages)
If some packages were installed via pip (even inside the Conda environment), you can also run:

```bash
pip list
```

This will show you all packages installed via pip, which may not appear in `conda list`.

---

### 3. **Using environment YAML file**
You can export the environment to a YAML file to view all packages and versions:

```bash
conda env export > environment.yml
```

Then open `environment.yml` to see a list like:

```yaml
dependencies:
  - python=3.10.4
  - numpy=1.24.3
  - pandas=1.5.3
  - pip:
    - some-pip-package==0.1.0
```

This is especially useful for sharing or recreating environments.

---

### Pro Tip: Show only name and version
To list just the package names and versions using `conda list`, you can combine with `awk` or Python parsing:

```bash
conda list | awk '{print $1, $2}'
```


