<template>
  <div id="dashboard-content">
    <div class="row">
      <div class="col-lg-4">
        <select class="form-control" aria-label="Default select example">
          <option selected>Semua Event</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="col-lg-8">
        <div class="text-right mb-4">{{ $store.state.today }}</div>
      </div>
    </div>
    <div class="card mb-3 my-3">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVldGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500"
            class="w-100 h-100"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body p-2">
            <h5 class="card-title">LSP Puskurbuk</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  beforeCreate() {
    const logged_in = localStorage.getItem("user");
    if (!logged_in) {
      this.$router.push("/login");
    }
  },
};
</script>
