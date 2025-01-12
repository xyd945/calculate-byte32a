const { keccak256, toUtf8Bytes } = require("ethers/lib/utils");

const roles = [
  "ALLOCATOR_ROLE",
  "DISALLOCATOR_ROLE",
  "BURNER_ROLE",
  "CONFIGURATOR_ROLE"
];

roles.forEach((roleString) => {
  const hashed = keccak256(toUtf8Bytes(roleString));
  console.log(`${roleString}: ${hashed}`);
});
