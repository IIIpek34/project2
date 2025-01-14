# Description

Gendiff - utility to calculate differences between two data structures. Supports .json and .yaml formats.

---

## Installation


Installation inside the directory with the code:
```
make install
make publish
make link
```

---

## Usage
```
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Arguments:
  filepath1            Path to the first file
  filepath2            Path to the second file

Options:
  -f, --format <type>  Output format (default: "stylish")
  -h, --help           display help for command
```

---

## Run locally

Example:
```
node bin/diff.js --format stylish __fixtures__/file1.json __fixtures__/file2.json
```