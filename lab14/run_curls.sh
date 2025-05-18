#!/bin/bash

BASE_URL="http://localhost:3000/calculator"

declare -A operations=(
  [addition]="2 3"
  [subtraction]="5 2"
  [multiplication]="4 6"
  [division]="10 2"
  [modulus]="10 3"
)

for op in "${!operations[@]}"; do
  read a b <<< "${operations[$op]}"
  echo "Testing $op with a=$a and b=$b"

  # GET with URL params
  curl -s -X GET "$BASE_URL/$op/$a/$b"
  echo

  # GET with query params
  curl -s -X GET "$BASE_URL/$op?a=$a&b=$b"
  echo

  # POST with URL encoded form data
  curl -s -X POST "$BASE_URL/$op" -d "a=$a&b=$b"
  echo

  # POST with JSON body
  curl -s -X POST "$BASE_URL/$op" \
    -H "Content-Type: application/json" \
    -d "{\"a\":$a,\"b\":$b}"
  echo -e "\n------------------------\n"
done
