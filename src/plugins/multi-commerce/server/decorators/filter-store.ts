function InjectStoreIdClass<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    async find(query: any) {
      // Add the store_id property to the query or modify it as needed
      const modifiedQuery = {
        ...query,
        store_id: 123, // Replace with the desired store ID
      };

      // Call the original find method with the modified query
      return super.find(modifiedQuery);
    }

    async findOne(id: any) {
      // Add the store_id property to the id or modify it as needed
      const modifiedId = {
        ...id,
        store_id: 123, // Replace with the desired store ID
      };

      // Call the original findOne method with the modified id
      return super.findOne(modifiedId);
    }
  };
}
