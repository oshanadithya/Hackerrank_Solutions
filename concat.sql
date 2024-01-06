SELECT id, first_name, last_name
FROM customers
WHERE LENGTH(CONCAT(first_name, last_name)) < 12
ORDER BY LENGTH(CONCAT(first_name, last_name)), CONCAT(first_name, last_name), id;