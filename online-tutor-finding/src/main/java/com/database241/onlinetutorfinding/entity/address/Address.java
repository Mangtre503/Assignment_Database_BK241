package com.database241.onlinetutorfinding.entity.address;

import com.database241.onlinetutorfinding.entity.user.SystemUser;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@Table(name = "address")
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "addr_id", nullable = false)
    private Long id;

    @Column(name = "house_number")
    private Integer houseNumber;

    @Column(name = "str_name")
    private String streetName;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private SystemUser systemUser;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumns({
            @JoinColumn(name = "dist_city_id", referencedColumnName = "dist_city_id"),
            @JoinColumn(name = "pro_id", referencedColumnName = "pro_id"),
            @JoinColumn(name = "ward_id", referencedColumnName = "ward_id")
    })
    private Ward ward;
}