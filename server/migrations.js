/*
 * Export env variable
 *
 *   Example:
 *   export ADMIN="user:password@domain.com"
 */
Dev.hasEnv('ADMIN', (ADMIN) => {
  Migrations.add('users', () => {
    const [user, domain] = ADMIN.split('@');
    const [username, password] = user.split(':');

    // CREATED USER ID
    const _id = Accounts.createUser({

      // Username and Password
      username, password,

      // Email
      email: `${username}@${domain}`,

      // Profile
      profile: {
        first_name: username,
        language: 'en' // Default language.
      }
    });

    // ADD ROLE
    Roles.addUsersToRoles(_id, 'admin');
  });
});
