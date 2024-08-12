<template>
  <div>
    <q-btn @click="addFriend()">数据库</q-btn>
  </div>
</template>

<script setup lang="ts">
import { db } from 'src/db';

async function addFriend() {
  try {
    // Add the new friend!
    await db.friends.add({
      name: '藏',
      age: 12,
    });

    // this.status = `Friend ${this.friendName}
    //       successfully added. Got id ${id}`;

    // // Reset form:
    // this.friendName = '';
    // this.friendAge = this.defaultAge;
  } catch (error) {
    // this.status = `Failed to add
    //       ${this.friendName}: ${error}`;
  }
}
</script>

<style scoped></style>
