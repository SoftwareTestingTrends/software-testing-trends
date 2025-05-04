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

## Removing unnecessary environments
Conda virtual environments can consume a significant amount of disk space, especially if you've created many of them over time. Each environment typically has its own copy of Python, libraries, and dependencies, which adds up quickly.

### Here's how you can free up space:

### 1. **List Conda Environments**

First, see which environments exist:

```bash
conda env list
```

or

```bash
conda info --envs
```

---

### 2. **Remove Unused Environments**

If you spot environments you no longer need, remove them with:

```bash
conda remove --name myenv --all
```

Replace `myenv` with the name of the environment you want to delete.

---

### 3. **Clear Conda Package Cache**

Conda keeps a cache of downloaded packages. This can grow large over time. You can clear it using:

```bash
conda clean --all
```

You’ll be prompted for confirmation. This removes:

* Unused packages
* Tarballs
* Index cache
* Unused caches

To do it without prompt:

```bash
conda clean --all --yes
```

---

### 4. **Manually Check the `envs` Directory**

Sometimes orphaned environments or large installations live in:

```bash
~/miniconda3/envs
```

or

```bash
~/anaconda3/envs
```

You can manually inspect and delete any large folders corresponding to unused environments **only if you're sure they're not needed**.

### Quick Tip
Here's a one-liner command that lists **all Conda environments** and shows their **disk usage**, sorted by size:

```bash
du -sh $(conda env list | awk '{print $NF}' | grep -E '^/|^/Users|^/opt') 2>/dev/null | sort -hr
```

---

### What this does:

* `conda env list`: Lists all environments.
* `awk '{print $NF}'`: Extracts the path from each line.
* `grep -E '^/|^/Users|^/opt'`: Filters only actual environment paths (skips the header).
* `du -sh`: Shows disk usage in human-readable format.
* `sort -hr`: Sorts output from largest to smallest.

---

### Example Output:

```
2.3G    /opt/anaconda3/envs/ai_projects
1.9G    /opt/anaconda3
1.4G    /Users/abc/anaconda3/envs/mlflow-d758da66ae6b5dac8a2b69972cb371638d4cc6f3
...
```

This helps you **identify which environments are consuming the most space** so you can clean up the largest, unused ones.

##  Delete complete Anaconda and reinstall it
You can delete and reinstall Anaconda to reclaim space and start fresh. It's a clean way to remove all accumulated bloat (including unused environments, cached packages, etc.).

### ⚠️ Before you proceed:

* **You will lose all Conda environments**, unless you back them up.
* If you've installed any custom packages in the base environment, they will be gone.
* You may want to export environments you care about (see below).


### Step 1: (Optional) Backup environments

For any environment you want to keep, export it:

```bash
conda activate myenv
conda env export > myenv.yml
```

You can later recreate it with:

```bash
conda env create -f myenv.yml
```

---

### Step 2: Remove Anaconda completely

Run the following commands:

```bash
rm -rf /opt/anaconda3
```

Then, if you added Conda to your shell config (e.g., `.bashrc`, `.zshrc`, etc.), remove or comment out the lines like:

```bash
# >>> conda initialize >>>
# ... bunch of lines ...
# <<< conda initialize <<<
```

You can check and clean it with:

```bash
nano ~/.zshrc   # or ~/.bashrc, depending on your shell
```

Then restart your shell:

```bash
exec $SHELL
```

---

### Step 3: Install a fresh version

#### Option A: **Miniconda** (recommended for low disk usage)

Download from: [https://docs.conda.io/en/latest/miniconda.html](https://docs.conda.io/en/latest/miniconda.html)
Then run:

```bash
bash Miniconda3-latest-MacOSX-x86_64.sh
```

#### Option B: **Anaconda** (if you need everything pre-installed)

Download from: [https://www.anaconda.com/products/distribution](https://www.anaconda.com/products/distribution)
Then run:

```bash
bash Anaconda3-latest-MacOSX-x86_64.sh
```

---

### After install: verify with

```bash
conda --version
conda info --envs
```






