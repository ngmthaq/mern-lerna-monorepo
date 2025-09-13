function configuration() {
  return {
    secret: process.env.APP_SECRET || "default-secret",
    port: parseInt(process.env.APP_PORT || "3000", 10),
    database: process.env.DATABASE_URL || "file:./dev.db",
    redis: {
      enable: process.env.REDIS_ENABLE === "true",
      host: process.env.REDIS_HOST || "localhost",
      port: parseInt(process.env.REDIS_PORT || "6379", 10),
    },
  };
}

export default configuration;
