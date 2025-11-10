package ar.com.utnfrsr.todoapp.repository;

import ar.com.utnfrsr.todoapp.model.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TastkRepository extends JpaRepository<Task, Long> {

    /**
     * 
     *
     * @param id 
     * @param finished
     */
    @Modifying 
    @Query(value = "UPDATE TASK SET FINISHED=:finished WHERE ID=:id", nativeQuery = true)
    void markTaskAsFinished(@Param("id") Long id, @Param("finished") boolean finished);
}