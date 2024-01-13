import React, { useState, useEffect } from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [isAdmin, setIsAdmin] = useState(null);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsAdminLoading(true);
        const res = await axiosSecure.get(`/users/admin/${user?.email}`);
        console.log(res.data);
        setIsAdmin(res.data?.admin);
      } catch (error) {
        console.error('Error fetching admin status:', error);
        setError(error);
      } finally {
        setIsAdminLoading(false);
      }
    };

    if (user?.email) {
      fetchData();
    }
  }, [user?.email, axiosSecure]);

  return [isAdmin, isAdminLoading, error];
};

export default useAdmin;

